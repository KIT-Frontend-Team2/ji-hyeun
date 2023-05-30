import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useUserStore } from "../../../../context/user";
const SignIn = () => {
  const { onSubmit } = useUserStore();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">이메일</label>
      <input
        id="email"
        type="text"
        placeholder="test@email.com"
        aria-invalid={!isDirty ? undefined : errors.email ? "true" : "false"}
        {...register("email", {
          required: "이메일은 필수 입력입니다.",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "이메일 형식에 맞지 않습니다.",
          },
        })}
      />
      {errors.email && <small role="alert">{errors.email.message}</small>}
      <label htmlFor="password">비밀번호</label>
      <input
        id="password"
        type="password"
        placeholder="****************"
        aria-invalid={!isDirty ? undefined : errors.password ? "true" : "false"}
        {...register("password", {
          required: "비밀번호는 필수 입력입니다.",
          minLength: {
            value: 8,
            message: "8자리 이상 비밀번호를 사용하세요.",
          },
        })}
      />
      {errors.password && <small role="alert">{errors.password.message}</small>}
      <Button type="submit" disabled={isSubmitting}>
        로그인
      </Button>
    </form>
  );
};

export default SignIn;

const Button = styled.button`
  width: 80px;
  height: 35px;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
`;
