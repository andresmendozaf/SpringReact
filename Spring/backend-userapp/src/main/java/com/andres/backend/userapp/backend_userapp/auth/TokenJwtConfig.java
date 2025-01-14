package com.andres.backend.userapp.backend_userapp.auth;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import java.security.Key;

import javax.crypto.SecretKey;

public class TokenJwtConfig {

    //public final static String SECRET_KEY = "algun_token_con_frase_secreta";
    public final static SecretKey SECRET_KEY = Jwts.SIG.HS256.key().build();
    public final static String PREFIX_TOKEN = "Bearer ";
    public final static String HEADER_AUTHORIZATION = "Authorization";


}
