import {LogOutButton, ProfileInfo, TaskButton, TasksField, Wrapper} from "../../styled-components/profile-page";
import Image from "next/image";
import {useRouter} from "next/router";
import {useContext, useEffect} from "react";
import AppContext from "@/core/context";


export default function ProfilePage() {
  const router = useRouter();
  const {user} = useContext(AppContext)
  const LogOut = () => {
    router.push('/').then()
  }

  useEffect(() => {
    console.log(user);
  })
  return (
    <>
      <Wrapper>
        <ProfileInfo>
          <Image priority
                 src="/avatar.svg"
                 width={400}
                 height={400}
                 alt="img"/>
          <h1>{user.username}</h1>
          <h1>{user.description}</h1>
          <TasksField>
            <TaskButton>
              New Task
            </TaskButton>
            <TaskButton>
              Completed Task
            </TaskButton>
          </TasksField>
        </ProfileInfo>
        <LogOutButton onClick={LogOut}>Log Out</LogOutButton>
      </Wrapper>
    </>
  )
}
