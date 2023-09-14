"use client";
import Link from "next/link";
import Image from "next/image";
import {useState, useEffect} from "react";
import {signIn, signOut, useSession, getProviders} from "next-auth/react";


const Nav = () => {
    const isUserLogin = false;

    const [providers, setProviders ] = useState(null);

    useEffect(()=>{
        const setProviders = async ()=>{
            const respnse = await getProviders();
            setProviders(respnse);
        }
        setProviders();
    },[]);

  return (
    <nav className="w-full flex-between mb-16 pt-3">

      <Link href="/" className="flex-center flex gap-2">
        <Image src = "/assets/images/logo.svg"
        width={30}
        height={30}
         className="object-contain"/>
         <p>Promptopia</p>
      </Link>

    
      <div className="sm:flex hidden">
        {
            isUserLogin ?
            (
                <div className="flex gap-3 md:gap-5">
                    <Link href="/create-post" className="black_btn">Create Post</Link>
                    <button type="button" Onclick={signOut} className="outline_btn"> Sign Out</button>
                    <Link href="/profile">
                        <Image src="/assets/images/logo.svg" 
                        width={37}
                        height={37}
                        alt="profile picture"
                        className="rounded-full"
                        />
                    </Link>
                </div>
            ):
            (
                <>
                {providers && Object.values(providers).map((provider) => (
                    <button type="button"
                    key={provider.name}
                     onClick ={() => signIn(provider.Id)}
                     className="black_btn"
                    >
                        Sign In
                    </button>
                ))}
                </>
            )
        }
      </div>
    </nav>
  )
}

export default Nav
