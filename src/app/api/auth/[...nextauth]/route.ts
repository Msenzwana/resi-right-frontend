import { LOGIN_URL } from '@/services/base';
import axios from "axios";
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                console.log("Here I am", credentials)
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Email and password are required.')
                }
                const userToLogin = {
                    email: credentials.email,
                    password: credentials.password
                }
                const user: any = await axios.post(LOGIN_URL, userToLogin,
                    {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });
                    console.log(user);
                // const user: any = await login(credentials.email, credentials.password);

                // return {id:0, email: "sasa", };
                return { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName, phone: user.phone }
            },
        }),
    ],
    session: {
        strategy: 'jwt' as const, // Using JWT for session management
    },
    pages: {
        signIn: '/auth/login', // Customize your sign-in page if necessary
    },
    callbacks: {
        async jwt({ token, user } : any) {
            debugger
           return {...token, ...user}
        },
        async session({ session, token } : any) {
            debugger
            if (token) {
                session.user.id = token.id
                session.user.email = token.email
                session.user.firstName = token.firstName
                session.user.lastName = token.lastName
                session.user.phone = token.phone
            }
            return session
        },
    },
    secret: process.env.JWT_SECRET || 'your_secret_key', // Optional, specify a JWT secret
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST };

