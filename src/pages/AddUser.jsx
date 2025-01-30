import React, { useEffect } from "react";
import Layout from "./Layout";
import FormAddUser from "../components/FormAddUser";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
const AddUser = () => {
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
      <FormAddUser />
    </Layout>
  );
};

export default AddUser;
