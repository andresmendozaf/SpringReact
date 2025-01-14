package com.andres.backend.userapp.backend_userapp.services;

import java.util.List;
import java.util.Optional;

import com.andres.backend.userapp.backend_userapp.models.entities.User;
import com.andres.backend.userapp.backend_userapp.models.request.UserRequest;

public interface UserService {

    List<User> findAll();

    Optional<User> findById(Long id);

    User save(User user);
    
    Optional<User> update(UserRequest user, Long id);

    void remove(Long id);

}
