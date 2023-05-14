import { CryptoProvider } from "./ExploreProvider"
import { ExplorerLayout } from "./ExplorerLayout"

 function MainLayout({children}:any){
    return(
        <CryptoProvider>
            <ExplorerLayout>
                {children}
            </ExplorerLayout>
        </CryptoProvider>
    )
}

export default MainLayout