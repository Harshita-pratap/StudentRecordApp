package com.harshita.StudentRecords.repository;

import com.harshita.StudentRecords.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
