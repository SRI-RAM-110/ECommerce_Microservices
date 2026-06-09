package com.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.entity.RegisterEntity;

@Repository
public interface RegisterRepo extends JpaRepository<RegisterEntity, Long> {

    RegisterEntity findByEmail(String email);

}