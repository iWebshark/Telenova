package com.telenova.backend.database.repository;

import com.telenova.backend.database.entity.BalanceEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BalanceEntityRepository extends CrudRepository<BalanceEntity, Integer> {
}
