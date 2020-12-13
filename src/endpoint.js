export default function endpoint(period="HOUR", mag="ALL") {
    switch(period) {
        case "HOUR":
            if(mag === "ALL"){
                return  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.csv"              
            }
            if(mag === "1.0"){
                return  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.csv"              
            }
            if(mag === "2.5"){
                return  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_hour.csv"              
            }
            if(mag === "4.5"){
                return  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_hour.csv"              
            }
            
            break;
        case "DAY":
            if(mag === "ALL"){
                return  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.csv"              
            }
                        if(mag === "1.0"){
                return  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_day.csv"              
            }
            if(mag === "2.5"){
                return  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.csv"              
            }
            if(mag === "4.5"){
                return  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.csv"              
            }
            break;
        case "7":
            if(mag === "ALL"){
                return  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.csv" 
            }
                        if(mag === "1.0"){
                return  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week.csv"              
            }
            if(mag === "2.5"){
                return  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.csv"              
            }
            if(mag === "4.5"){
                return  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.csv"              
            }

            break;  
        case "30":
            if(mag === "ALL"){
                return  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv"              
            }
                        if(mag === "1.0"){
                return  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_month.csv"              
            }
            if(mag === "2.5"){
                return  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.csv"              
            }
            if(mag === "4.5"){
                return  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.csv"              
            }
            break;
        default: 
            return  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.csv"
    }
}

//PERIODS
// HOUR
// DAY
// 7
// 30

//MAGNITUDES
// ALL
// 1.0
// 2.5
// 4.5