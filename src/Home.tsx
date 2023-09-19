import { Gallery } from "./Gallery"
import "./Home.css"

export function Home(){
    return (
        <div id="divHome" className ="home">
            <h1>Welcome to Game Consoles</h1>
            <h3>2nd hand game consoles, games, accessories and subscriptions</h3>
        
            <div id="divLogIN">
                <label htmlFor="">Email:</label>
                <input type="text" />
                <label htmlFor="">Password:</label>
                <input type="text" />
                <button id="btnLogIn" className="button">Log in</button>
                <button id="btnSignUp" className="button">Sign up</button>
            </div>
                        
            <div id="divRandomProducts">
                <label htmlFor="">Products that might interest you</label>  
                <div id="divRandomConsoles">    
                    <label htmlFor="">Consoles</label>
                    <div id="divRandomConsolesGallery">
                        <Gallery categoryId={1}/>
                    </div>
                </div>  

                <div id="divRandomGames">
                    <label htmlFor="">Games</label> 
                    <div id="divRandomGamesGallery">
                        <Gallery categoryId={2}/>
                    </div>
                </div> 

                <div id="divRandomAccessories">
                    <label htmlFor="">Accessories</label>
                    <div id="divRandomAccessoriesGallery">
                        <Gallery categoryId={3}/>
                    </div>
                </div>  

                <div id="divRandomSubscriptions">
                    <label htmlFor="">Subscriptions</label>
                    <div id="divRandomSubscriptionsGallery">
                        <Gallery categoryId={4}/>
                    </div>
                </div>  
            </div>  

        </div>
    )
}