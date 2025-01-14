package com.andres.backend.userapp.backend_userapp.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.andres.backend.userapp.backend_userapp.models.entities.User;


public interface UserRepository extends CrudRepository<User, Long>{

    Optional<User> findByUsername(String username);

}
