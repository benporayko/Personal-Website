package com.benporayko.personalsite.repositories;

import com.benporayko.personalsite.models.User;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
    
}
