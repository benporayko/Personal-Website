package com.benporayko.personalsite;

import com.benporayko.personalsite.models.User;
import com.benporayko.personalsite.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {
    private final UserRepository repositoryUser;

    @Autowired
    public DatabaseLoader(UserRepository repositoryUser) {
        this.repositoryUser = repositoryUser;
    }

    @Override
    public void run(String... strings) throws Exception {
        // this.repositoryUser.save(new User("Mario", "mario@luigi.com"));
    }
}
