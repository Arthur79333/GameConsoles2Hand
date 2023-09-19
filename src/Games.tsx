import { Outlet } from "react-router-dom";
import { Gallery } from "./Gallery";

export  function Games() {
            
    return (
      <div>    
          <h1>Here will be info about games</h1>

          <Outlet />
      </div>
    )
}
