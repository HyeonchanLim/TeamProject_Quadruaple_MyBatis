package com.green.project_quadruaple.search;

import com.green.project_quadruaple.common.config.enumdata.ResponseCode;
import com.green.project_quadruaple.common.config.security.AuthenticationFacade;
import com.green.project_quadruaple.common.model.ResponseWrapper;
import com.green.project_quadruaple.search.model.*;
import com.green.project_quadruaple.search.model.SearchFilter;
import com.green.project_quadruaple.search.model.filter.*;
import com.green.project_quadruaple.search.model.strf_list.GetSearchStrfListBasicRes;
import com.green.project_quadruaple.search.model.strf_list.LocationIdAndTitleDto;
import com.green.project_quadruaple.search.model.strf_list.StrfShortInfoDto;
import com.green.project_quadruaple.trip.model.Category;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.*;

@Slf4j
@Service
@RequiredArgsConstructor
public class SearchService {
    private final AuthenticationFacade authenticationFacade;
    private final SearchMapper searchMapper;

    @Value("${const.default-review-size}")
    private int size;

    // 기존
    /*public List<LocationResponse> getTripLocation(String searchWord, int offset, int pageSize) {
        // SQL 매퍼 호출
        return searchMapper.getTripLocation(searchWord, offset, pageSize);
    }*/


   /* public List<LocationResponse> getTripLocation(String searchWord) {
        return searchMapper.getTripLocation(searchWord);
    }*/
   public List<LocationResponse> getTripLocation(String searchWord) {
       List<LocationResponse> locations = searchMapper.getTripLocation(searchWord);
       System.out.println("Fetched locations: " + locations); // 디버깅용 로그 추가
       return locations;
   }

    public ResponseWrapper<GetSearchStrfListBasicRes> getStrfListBasic(long tripId, int lastIdx) {
        if(tripId == 0) return new ResponseWrapper<>(ResponseCode.BAD_REQUEST.getCode(), null);
        long signedUserId = 101L;
        int more = 1;
        try {
            List<LocationIdAndTitleDto> locationIdList = searchMapper.selLocationIdByTripId(tripId);
            List<StrfShortInfoDto> dto = searchMapper.selStrfShortInfoBasic(signedUserId, locationIdList, lastIdx, size+more, null, null);
            GetSearchStrfListBasicRes res = new GetSearchStrfListBasicRes();
            if(dto.size() >= size) {
                res.setMore(true);
            }
            res.setList(dto);
            List<String> titleList = new ArrayList<>();
            for(LocationIdAndTitleDto list : locationIdList) {
                titleList.add(list.getLocationTitle());
            }
            res.setLocationTitleList(titleList);
            return new ResponseWrapper<>(ResponseCode.OK.getCode(), res);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException();
        }
    }

    public ResponseWrapper<GetSearchStrfListBasicRes> getStrfListWithSearchWord(long tripId,
                                                                                int lastIdx,
                                                                                String category,
                                                                                String searchWord)
    {
        if(tripId == 0) return new ResponseWrapper<>(ResponseCode.BAD_REQUEST.getCode(), null);
        String categoryValue = null;
        if(category != null && Category.getKeyByName(category) != null) {
            categoryValue = Objects.requireNonNull(Category.getKeyByName(category)).getValue();
        }
        long signedUserId = 101L;
        int more = 1;
        try {
            List<LocationIdAndTitleDto> locationIdList = searchMapper.selLocationIdByTripId(tripId);
            List<StrfShortInfoDto> dto = searchMapper.selStrfShortInfoBasic(signedUserId, locationIdList, lastIdx, size+more, categoryValue, searchWord);
            GetSearchStrfListBasicRes res = new GetSearchStrfListBasicRes();
            if(dto.size() >= size) {
                res.setMore(true);
            }
            res.setList(dto);
            return new ResponseWrapper<>(ResponseCode.OK.getCode(), res);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException();
        }
    }





    // 검색창 - 최근 검색어 출력
    public ResponseWrapper<List<SearchGetRes>> searchGetList (){
       Long userId = authenticationFacade.getSignedUserId();
       if (userId <= 0){
           return null;
       }
       List<SearchGetRes> res = searchMapper.searchGetList(userId);
        for (SearchGetRes searchGetRes : res) {
            searchGetRes.setUserId(userId);
        }
       return new ResponseWrapper<>(ResponseCode.OK.getCode(),res);
    }



    // 밑으로 상품 검색
    public ResponseWrapper<List<SearchBasicRecentRes>> searchBasicRecent() {
        Long userId = authenticationFacade.getSignedUserId();
        List<SearchBasicRecentRes> res = searchMapper.searchBasicRecent(userId);
        if (res.isEmpty()){
            return new ResponseWrapper<>(ResponseCode.BAD_GATEWAY.getCode(), null);
        }
        try {
            return new ResponseWrapper<>(ResponseCode.OK.getCode(), res);
        } catch (Exception e) {
            return new ResponseWrapper<>(ResponseCode.SERVER_ERROR.getCode(), null);
        }
    }

    public ResponseWrapper<List<SearchBasicPopualarRes>> searchBasicPopular(){
        List<SearchBasicPopualarRes> res = searchMapper.searchBasicPopular();
        if (res.isEmpty()){
            return new ResponseWrapper<>(ResponseCode.BAD_GATEWAY.getCode(), null);
        }
        try {
            return new ResponseWrapper<>(ResponseCode.OK.getCode(), res);
        } catch (Exception e) {
            return new ResponseWrapper<>(ResponseCode.SERVER_ERROR.getCode(), null);
        }
    }

    public ResponseWrapper<List<Stay>> searchAll(String searchWord) {
        Long signedUserId = authenticationFacade.getSignedUserId();
//        if (signedUserId <= 0){
//            return new ResponseWrapper<>(ResponseCode.NOT_FOUND.getCode(), null);
//        }
        // 검색어 search_word 테이블 insert + update 작업용
        searchMapper.searchIns(searchWord,signedUserId);
        List<Stay> stays = searchMapper.searchAllList(searchWord,signedUserId);
        return new ResponseWrapper<>(ResponseCode.OK.getCode(), stays);
    }
    /*
    public ResponseWrapper<List<Stay>> searchAll(String searchWord) {
    Long signedUserId = authenticationFacade.getSignedUserId();
    if (searchWord == null) {
        return new ResponseWrapper<>(ResponseCode.BAD_REQUEST.getCode(), null);
    }
    if (signedUserId == null) {
        signedUserId = 0L; // NOT NULL 조건 충족
    }
    searchMapper.searchIns(searchWord, signedUserId);
    List<Stay> stays = searchMapper.searchAllList(searchWord, signedUserId);
    return new ResponseWrapper<>(ResponseCode.OK.getCode(), stays);
}
     */

    public List<Stay> searchCategoryWithFilters(Category category, int startIdx, int size) {
        Long userId = authenticationFacade.getSignedUserId();
        return searchMapper.searchCategoryWithFilters(category, startIdx, size, userId);
    }
    public List<StayCategory> searchCategory(String category, String searchWord, Long userId) {
        return searchMapper.searchCategory(category, searchWord, userId);
    }


    public List<SearchFilter> searchStayFilter (SearchFilterReq req){
       Long userId = authenticationFacade.getSignedUserId();
       List<SearchFilter> res = searchMapper.searchStayFilter(req,userId);
       return null;
    }
//    public List<SearchFilterDto> searchStayByAmenity(SearchFilterReq req) {
//        Long userId = authenticationFacade.getSignedUserId();
//
//        List<SearchFilterDto> stayAmenities = new ArrayList<>();
//
//        List<SearchFilterDto> list = searchMapper.searchStayByAmenity(req.getAmenityId(),userId,req.getSearchWord());
//
//        return list;
//    }
}
