
import React from 'react';
import styled from 'styled-components';
import {
  LocationOn,
  Home,
  Work,
  School,
  LocalCafe,
  Restaurant,
  ShoppingMall,
  LocalHospital,
  LocalGasStation,
  LocalParking,
  Flight,
  Train,
  DirectionsBus,
  LocalTaxi,
  Hotel,
  Beach,
  Park,
  Museum,
  TheaterComedy,
  LocalMovies,
  FitnessCenter,
  LocalLibrary,
  Church,
  AccountBalance,
  LocalPost,
  LocalPharmacy,
  LocalPolice,
  FireStation,
  Apartment,
  Villa,
  Business,
  Factory,
  Store,
  LocalMall,
  Storefront,
  LocalFlorist,
  LocalLaundryService,
  LocalCarWash,
  LocalAtm,
  LocalConvenienceStore,
  Fastfood,
  LocalPizza,
  LocalBar,
  LocalDining,
  Bakery,
  IceCream,
  Stadium,
  SportsBasketball,
  Golf,
  Pool,
  Spa,
  NightClub,
  LiveMusic
} from '@mui/icons-material';

const Container = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  margin: 20px 0;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  margin-bottom: 30px;
  font-size: 28px;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, #9c27b0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const IconCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background: ${({ theme }) => theme.bgLight};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.primary + '20'};
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px ${({ theme }) => theme.primary + '30'};
    border-color: ${({ theme }) => theme.primary};
  }
`;

const IconWrapper = styled.div`
  color: ${({ theme }) => theme.primary};
  margin-bottom: 10px;
  font-size: 2.5rem;
  transition: all 0.3s ease;
  
  ${IconCard}:hover & {
    transform: scale(1.1);
    color: #9c27b0;
  }
`;

const IconName = styled.span`
  color: ${({ theme }) => theme.text_primary};
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  line-height: 1.2;
`;

const CategoryTitle = styled.h3`
  color: ${({ theme }) => theme.text_secondary};
  margin: 30px 0 15px 0;
  font-size: 20px;
  border-bottom: 2px solid ${({ theme }) => theme.primary};
  padding-bottom: 5px;
`;

const PlaceIcons = () => {
  const iconCategories = {
    "Basic Locations": [
      { icon: <LocationOn />, name: "Location Pin" },
      { icon: <Home />, name: "Home" },
      { icon: <Work />, name: "Office/Work" },
      { icon: <School />, name: "School/Education" },
      { icon: <Business />, name: "Business Center" },
      { icon: <Apartment />, name: "Apartment" },
      { icon: <Villa />, name: "Villa/House" }
    ],
    "Food & Dining": [
      { icon: <Restaurant />, name: "Restaurant" },
      { icon: <LocalCafe />, name: "Cafe" },
      { icon: <Fastfood />, name: "Fast Food" },
      { icon: <LocalPizza />, name: "Pizza Place" },
      { icon: <LocalBar />, name: "Bar" },
      { icon: <LocalDining />, name: "Fine Dining" },
      { icon: <Bakery />, name: "Bakery" },
      { icon: <IceCream />, name: "Ice Cream" }
    ],
    "Shopping": [
      { icon: <ShoppingMall />, name: "Shopping Mall" },
      { icon: <Store />, name: "Store" },
      { icon: <LocalMall />, name: "Mall" },
      { icon: <Storefront />, name: "Shop Front" },
      { icon: <LocalFlorist />, name: "Flower Shop" },
      { icon: <LocalConvenienceStore />, name: "Convenience Store" }
    ],
    "Transportation": [
      { icon: <Flight />, name: "Airport" },
      { icon: <Train />, name: "Train Station" },
      { icon: <DirectionsBus />, name: "Bus Stop" },
      { icon: <LocalTaxi />, name: "Taxi" },
      { icon: <LocalParking />, name: "Parking" },
      { icon: <LocalGasStation />, name: "Gas Station" }
    ],
    "Healthcare & Emergency": [
      { icon: <LocalHospital />, name: "Hospital" },
      { icon: <LocalPharmacy />, name: "Pharmacy" },
      { icon: <LocalPolice />, name: "Police Station" },
      { icon: <FireStation />, name: "Fire Station" }
    ],
    "Entertainment & Recreation": [
      { icon: <Hotel />, name: "Hotel" },
      { icon: <Beach />, name: "Beach" },
      { icon: <Park />, name: "Park" },
      { icon: <Museum />, name: "Museum" },
      { icon: <TheaterComedy />, name: "Theater" },
      { icon: <LocalMovies />, name: "Cinema" },
      { icon: <Stadium />, name: "Stadium" },
      { icon: <NightClub />, name: "Night Club" },
      { icon: <LiveMusic />, name: "Live Music" }
    ],
    "Sports & Fitness": [
      { icon: <FitnessCenter />, name: "Gym/Fitness" },
      { icon: <SportsBasketball />, name: "Basketball Court" },
      { icon: <Golf />, name: "Golf Course" },
      { icon: <Pool />, name: "Swimming Pool" },
      { icon: <Spa />, name: "Spa" }
    ],
    "Services & Utilities": [
      { icon: <LocalLibrary />, name: "Library" },
      { icon: <Church />, name: "Church" },
      { icon: <AccountBalance />, name: "Bank" },
      { icon: <LocalPost />, name: "Post Office" },
      { icon: <LocalAtm />, name: "ATM" },
      { icon: <LocalLaundryService />, name: "Laundry" },
      { icon: <LocalCarWash />, name: "Car Wash" },
      { icon: <Factory />, name: "Factory/Industry" }
    ]
  };

  return (
    <Container>
      <Title>Place Icons Collection</Title>
      {Object.entries(iconCategories).map(([category, icons]) => (
        <div key={category}>
          <CategoryTitle>{category}</CategoryTitle>
          <IconGrid>
            {icons.map((item, index) => (
              <IconCard key={index}>
                <IconWrapper>
                  {item.icon}
                </IconWrapper>
                <IconName>{item.name}</IconName>
              </IconCard>
            ))}
          </IconGrid>
        </div>
      ))}
    </Container>
  );
};

export default PlaceIcons;
