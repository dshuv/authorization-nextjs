import {SubmitHandler, useForm} from "react-hook-form";
import {useRouter} from "next/router";
import LoginForm from "../../interface/login-form.interface";
import IUser from "../../interface/user.interface";
import {
  LoginWrapper,
  Title,
  AuthorizationForm,
  AuthorizationField,
  Label,
  ErrorMessage, AuthorizationCheckbox, Input, CheckBox, CheckBoxLabel, Button, Border
} from "../../styled-components/home-page";


export default function HomePage() {
  // const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<LoginForm>();

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    const users: IUser[] = JSON.parse(localStorage.getItem("users") || "");
    if (users.length) {
      const candidate = users.find(el => el.username === data.username);
      if (candidate) {
        if (candidate.password === data.password) {
          console.log(candidate);
          // router.push(`/profile/${candidate.id}`);
        }
      }
    }
  }

  return (
    <>
      <LoginWrapper>
        <Border/>
        <Title>Account Login</Title>

        <AuthorizationForm>
          <AuthorizationField>
            <Input type="text"
                   {...register("username", {required: true})}
            />
            {errors.username && (
              <ErrorMessage>This field is required!</ErrorMessage>
            )}
            <Label>Username</Label>
          </AuthorizationField>

          <AuthorizationField>
            <Input type="password"
                   {...register("password", {required: true})}
            />
            {errors.username && (
              <ErrorMessage>This field is required!</ErrorMessage>
            )}
            <Label>Password</Label>
          </AuthorizationField>

          <AuthorizationCheckbox>
            <CheckBoxLabel>
              <CheckBox type="checkbox"
                        {...register("checkbox", {required: false})}
              />
              Remember me?
            </CheckBoxLabel>
          </AuthorizationCheckbox>
        </AuthorizationForm>


        <Button onClick={handleSubmit(onSubmit)}>LOGIN</Button>
      </LoginWrapper>
    </>
  )
}

