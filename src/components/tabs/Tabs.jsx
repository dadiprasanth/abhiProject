// components/VerticalTabs.js
import React, { useState } from 'react';
import { Tabs, Tab, Paper, useMediaQuery, SwipeableDrawer } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TimelineIcon from '@mui/icons-material/Timeline';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import Time from './Time';
import Available from "./Available"
import { makeStyles } from '@mui/styles';

import DashBoard from './DashBoard';
const useStyles = makeStyles({
  
})
const VerticalTabs = (props) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const isMobile = useMediaQuery('(max-width:600px)'); // Detect mobile screens
  
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const toggleDrawer = (open) => (event) => {
    // Implement the logic to open/close the drawer
    props.setMobileTabs(open)
  };
let data=[{title:`Detecting fake news using machine learning`,
desc:`Fake news has become a major concern in today's society, with the potential to spread misinformation and influence people's beliefs and decisions. With the rise of social media and the ease of sharing information, fake news can spread rapidly and cause significant harm. Therefore, it is crucial to develop techniques to identify and prevent the spread of fake news. One promising approach is to use machine learning techniques to automatically detect fake news.
Machine learning is a powerful tool for analyzing large datasets and identifying patterns that are difficult for humans to discern. By training machine learning models on large datasets of real and fake news articles, we can develop models that can accurately identify fake news. The goal of this project is to propose a machine learning-based approach for detecting fake news and evaluate its effectiveness.
`,
date:"sep/2023"
},{title:`Earthquake Analysis and Prediction using machine learning`,
desc:`Earthquakes are one of the most destructive natural hazards on Earth. They can cause widespread damage and loss of life. In recent years, there has been growing interest in using machine learning to predict earthquakes. This project will use machine learning models to predict future earthquakes using the Ultimate Earthquake Dataset: https://www.kaggle.com/datasets/alessandrolobello/the-ultimate-earthquake-dataset-from-1990-2023. The dataset contains information on over 3 million earthquakes that occurred worldwide from 1990 to 2023.
The project will use Linear Regression. The model will be trained on the dataset and it's performance will be evaluated on a held-out test set. The best model will be deployed to production so that it can be used to predict future earthquakes.
This project has the potential to make a significant contribution to earthquake prediction. By using machine learning, it may be possible to develop more accurate and reliable earthquake prediction models. This could help to save lives and reduce the damage caused by earthquakes.
`,date:"sep/2023"},
  {title:"ECG Anomaly Detection using machine learning",
            desc:`ECG anomaly detection is a critical task in the healthcare industry 
            for the early diagnosis and treatment of heart diseases. Machine learning
            techniques have shown great potential in accurately detecting ECG anomalies 
            and reducing the workload of healthcare providers. The motivation behind
            this research is to develop advanced machine learning algorithms that can 
            enhance ECG anomaly detection accuracy, reduce false positives, and provide 
            reliable diagnoses.`,date:"Aug/2023"}
            ,{title:"Identifying Fraudulent Transactions using Machine Learning",
            desc:`Fraudulent transactions are a major concern for businesses, financial institutions,
            and individuals. These transactions can lead to significant financial losses and have
            serious consequences for those involved. In recent years, machine learning techniques 
            have been used to identify and prevent fraudulent transactions. The aim of this project 
            is to build a model that can accurately predict whether a transaction is fraudulent or not,
            based on historical transaction data.`,date:"July/2023"}
            ,{title:"HATESPEECH DETECTION USING MACHINE LEARNING",
            desc:`This project focuses on the detection of hate speech and offensive language in tweets using 
            machine learning techniques. The dataset used contains 24,783 tweets, labeled as
            hate speech, offensive language, or neither, and is preprocessed to remove stop words, 
            punctuation, URLs, and perform stemming and uppercase text conversion. The preprocessed
            data is split into training and testing sets, converted into numerical features using 
            CountVectorizer and TfidfTransformer, and trained on two classification models: Multinomial Naive Bayes and XGBoost.
            The performance of these models is evaluated using confusion matrix and classification report.`,
            date:"June/2023"
            },
            {
              title:"Chatbot for Banking Services using ML",
              desc:`Chatbots have become increasingly popular in the banking industry for customer service due to
              several reasons, including: 24/7 availability: Unlike human customer service representatives, 
              chatbots can operate 24/7 without breaks or downtime, which makes them an ideal solution for banks
              that want to offer their customers round-the-clock assistance.
              the motivation for using chatbots in bank customer service is to provide customers with a
              faster, more efficient, and cost-effective way to get answers to their banking queries while also
              improving their overall experience`,
              date:"may/2023"
            },{
              title:"1.	Gold Price Forecasting using face book prophet forecasting model",
              desc:`Gold, often referred to as the "king of metals," has captivated human civilization for millennia due to its inherent beauty, rarity, and intrinsic value. As a precious metal, gold has been a symbol of wealth, luxury, and stability across cultures and history. In the modern financial landscape, gold's role has evolved beyond its ornamental and cultural significance. It plays a crucial role as a safe-haven asset, a hedge against inflation, and a means of portfolio diversification.
              Understanding the dynamics of gold prices is of paramount importance for investors, economists, and policymakers alike. The intricate interplay of factors influencing gold's value encompasses economic indicators, geopolitical events, central bank policies, and shifts in investor sentiment. Consequently, accurate forecasting of gold prices has become a vital aspect of financial analysis. One commonly used approach for time series forecasting like this is the Prophet forecasting model developed by Facebook.
              `,
              date:"April/2023"
            }
          ]
  return (
    <Paper style={{ display: 'flex', height: '100%' }}>
      {isMobile ? (
        <SwipeableDrawer
          anchor="left"
          open={props.mobileTabs}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={selectedTab}
          onChange={handleTabChange}
          aria-label="Vertical tabs"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        //   style={{
        //     background: 'rgba(255, 255, 255, 0.3)', // Transparent background with a hint of white
        //     boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
        //   }}
        >
          <Tab 
            label={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <DashboardIcon /> {/* Replace with your desired icon component */}
              <span style={{ marginLeft: '8px' }}>Dashboard</span>
            </div>
          }
           style={{ backdropFilter: 'blur(8px)' }}/>
                     <Tab 
            label={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <EventAvailableIcon /> {/* Replace with your desired icon component */}
              <span style={{ marginLeft: '8px' }}>Available </span>
            </div>
          }
           style={{ backdropFilter: 'blur(8px)' }}/>
          <Tab 
            label={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <UpcomingIcon /> {/* Replace with your desired icon component */}
              <span style={{ marginLeft: '8px' }}>Upcoming</span>
            </div>
          }
           style={{ backdropFilter: 'blur(8px)' }}/>
          
          
          {/* Add more tabs as needed */}
                    <Tab 
            label={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <TimelineIcon/> {/* Replace with your desired icon component */}
              <span style={{ marginLeft: '8px' }}>TimeLine</span>
            </div>
          }
           style={{ backdropFilter: 'blur(8px)' }}/>
        </Tabs>
        </SwipeableDrawer>
      ) : (
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={selectedTab}
          onChange={handleTabChange}
          aria-label="Vertical tabs"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        //   style={{
        //     background: 'rgba(255, 255, 255, 0.3)', // Transparent background with a hint of white
        //     boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
        //   }}
        >
          <Tab 
            label={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <DashboardIcon /> {/* Replace with your desired icon component */}
              <span style={{ marginLeft: '8px' }}>Dashboard</span>
            </div>
          }
           style={{ backdropFilter: 'blur(8px)' }}/>
                     <Tab 
            label={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <EventAvailableIcon /> {/* Replace with your desired icon component */}
              <span style={{ marginLeft: '8px' }}>Available </span>
            </div>
          }
           style={{ backdropFilter: 'blur(8px)' }}/>
          <Tab 
            label={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <UpcomingIcon /> {/* Replace with your desired icon component */}
              <span style={{ marginLeft: '8px' }}>Upcoming</span>
            </div>
          }
           style={{ backdropFilter: 'blur(8px)' }}/>
          
          
          {/* Add more tabs as needed */}
                    <Tab 
            label={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <TimelineIcon/> {/* Replace with your desired icon component */}
              <span style={{ marginLeft: '8px' }}>TimeLine</span>
            </div>
          }
           style={{ backdropFilter: 'blur(8px)' }}/>
        </Tabs>
      )}
      <div style={{ flexGrow: 1, height: '83vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flexGrow: 1, overflow: 'auto', padding: '16px' }}>
          {selectedTab === 0 && <DashBoard/>}
          {selectedTab === 1 && <Available data={data}/>}
          {selectedTab === 2 && <div>Content for Tab 3</div>}
          {selectedTab === 3 && <Time data={data}/>}
          {/* Add more content for other tabs */}
        </div>
      </div>
    </Paper>
  );
};

export default VerticalTabs;
