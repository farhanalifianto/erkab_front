import React, { useEffect } from "react";
import Layout from "./Layout";
import FormEditUser from "../components/FormEditUser";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const EditUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
    if (user && user.role !== "admin") {
      navigate("/404");
    }
  }, [isError, navigate, user]);
  return (
    <Layout>
      <FormEditUser />
    </Layout>
  );
};

export default EditUser;
