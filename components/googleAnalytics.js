// googleAnalytics.js
//'UA-148580530-1'
  
import ReactGA from "react-ga"
  
export const initGA = () => {
  ReactGA.initialize("UA-158332532-1")
}
  
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
