package com.andres.backend.userapp.backend_userapp.models.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UserRequest {

    @NotBlank
    @Size(min = 4, max = 8)
    private String username;

    @Email
    @NotEmpty
    private String email;

}
