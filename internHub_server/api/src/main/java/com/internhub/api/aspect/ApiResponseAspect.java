package com.internhub.api.aspect;

import com.internhub.api.response.DataResponse;
import com.internhub.api.response.ErrorResponse;
import jakarta.persistence.EntityNotFoundException;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ProblemDetail;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class ApiResponseAspect {

    @Pointcut("execution(* com.internhub.api.rest..*(..)) && !execution(* com.internhub.api.rest.FileController.*(..))")
    public void restControllerMethods() {
    }

    @Around("restControllerMethods()")
    public Object formatResponse(ProceedingJoinPoint joinPoint) {
        ResponseEntity<?> response;
        try {
            response = (ResponseEntity<?>) joinPoint.proceed();
        } catch (UsernameNotFoundException | EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(e.getMessage()));
        } catch (DuplicateKeyException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(new ErrorResponse(e.getMessage()));
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ErrorResponse("Incorrect email or password, please try again"));
        } catch (Exception e) {
            System.out.println(e);
            return ResponseEntity.internalServerError().body(new ErrorResponse(e.getMessage()));
        } catch (Throwable t) {
            return ResponseEntity.internalServerError().build();
        }
        return response;
    }
}
