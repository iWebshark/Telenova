package com.telenova.backend.database.repository;

import com.telenova.backend.database.entity.BalanceEntity;
import com.telenova.backend.database.entity.ServiceEntity;
import com.telenova.backend.database.entity.ServiceStatusEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface ServiceEntityRepository extends CrudRepository<ServiceEntity, Integer> {
    List<ServiceEntity> findAllByUserId(Integer id);

    List<ServiceEntity> findAllByUserIdAndOfferIdIn(Integer id, List<Integer> offerIds);

    List<ServiceEntity> findAllByOfferIdInAndServiceStatus(List<Integer> offerIds, ServiceStatusEntity status);

    ServiceEntity findByIdIs(Integer id);

    List<ServiceEntity> findAllByServiceStatus(ServiceStatusEntity status);

    ServiceEntity findByBalance(BalanceEntity balanceEntity);

    @Transactional
    void deleteByIdIs(Integer id);
}
