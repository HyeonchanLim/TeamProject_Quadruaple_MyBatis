package com.green.project_quadruaple.user;

import com.green.project_quadruaple.common.model.ResultResponse;
import com.green.project_quadruaple.user.model.DuplicateEmailResult;
import com.green.project_quadruaple.user.model.UserSignInReq;
import com.green.project_quadruaple.user.model.UserSignInRes;
import com.green.project_quadruaple.user.model.UserSignUpReq;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("user")
public class UserController {
    private final UserService userService;

    // 회원가입 요청
    @PostMapping("sign-up")
    @Operation(summary = "회원가입", description = "사진 파일 때문에 postman 사용")
    public ResultResponse signUpUser(@RequestPart(required = false) MultipartFile profilePic, @Valid @RequestPart UserSignUpReq p) {
        return userService.signUp(profilePic, p);
    }

    @GetMapping("sign-up")
    @Operation(summary = "아이디 중복 체크")
    public ResultResponse checkDuplicatedEmail(@RequestParam String email) {
        return userService.checkDuplicatedEmail(email);
    }

    @PostMapping("sign-in")
    @Operation(summary = "로그인")
    public ResultResponse signInUser(@RequestBody UserSignInReq req, HttpServletResponse response) {
        log.info("Sign in request: {}", req);
        return userService.signIn(req, response);
    }

    @GetMapping("access-token")
    @Operation(summary = "토큰")
    public String getAccessToken(HttpServletRequest req) {
        return userService.getAccessToken(req);
    }

    @GetMapping("userInfo")
    @Operation(summary = "마이페이지 조회")
    public ResultResponse getUserInfo(long userId) {
        return userService.infoUser(userId);
    }
}