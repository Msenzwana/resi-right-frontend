import { FC, Suspense } from "react";
import RootLayout from "../../layout";
import Loading from "../../loading";

interface Props {
    children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
    return <div
        style={{
            backgroundImage: "linear-gradient(#09203F, #537895)"
        }}
        className="flex justify-center items-center h-screen" >
        <RootLayout>
            <div className="lg:h-4/5 lg:w-4/6 w-screen h-screen bg-white rounded-lg">
                <Suspense fallback={<Loading />}>
                    {children}
                </Suspense>
            </div>
        </RootLayout>
    </div>
}

export default Layout;