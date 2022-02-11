# UFO Sightings - The Truth is Out There

## Overview
Dana is a data journalist who is given the opportunity to write about an interesting UFO topic.  She is from McMinnville, OR which is famous for UFO sightings and has gathered enthusiasts since the 1950 Framer Trent sighting.  She was provided a data set of UFO sightings across multiple locations with information about the sightings.  She plans to use Javascript and HTML to analyze the data and help end users be able to search the data to find sightings based on the following criteria.  

*  date 
*  city
*  state
*  country
*  shape

<p align="center">
  <img src = https://github.com/lauras521/UFOs/blob/910a2ecefba080af01750d9b222ad70df6339f71/Resources/site_image.PNG>
</p>

## Results
Dana was able to successfully read in the Javascript data file with hundreds of UFO sightings.  She wrote 3 different functions in Javascript to be able to accomplish this:
1. build the table
2. update the filters
3. filter the table based on the appropriate filters

Her HTML code accomplished the following to deploy a successful site:
1. used bootstrap for site formatting
2. read in a css styling sheet to add background color, images, and text color
3. read in the D3 library to be able to listen in on code and react to user input for filtering
4. read in the Javascript file to properly build the table
5. added HTML tags to be able to display text for the site title and summary as well as to display the table

### How to Perform Search
The end user can enter information into any of the 5 filter boxes and press enter to display the data of interest.  

Below shows an example if just the date is entered how the table will display (date=1/13/2010):

<p align="center">
  <img src = https://github.com/lauras521/UFOs/blob/910a2ecefba080af01750d9b222ad70df6339f71/Resources/site_image_date_filter.PNG>
</p>

Below shows an example of multiple filters added and the corresponding table (state=ca, shape=light): 

<p align="center">
  <img src = https://github.com/lauras521/UFOs/blob/910a2ecefba080af01750d9b222ad70df6339f71/Resources/site_image_state_shape_filter.PNG>
</p>


## Summary
While the site enables user interaction and the filters are helpful to analyze the data there are drawbacks and improvements.

### Drawbacks
One drawback is the filters only work with the correct capitilization of the city, state, and country which is currently all lowercase.  You could update the code to account for uppercase letters which are normally used when typing proper nouns.

### Recommendations for Further Development
To further develop I would consider adding the following information: 
1. Once you scroll off the main page you can no longer see the column headers for the table.  Adding code to be able to have the headers stay at the top of the page as you scroll would be another nice user experience improvement. 
2. People might want to export the data filtered into an alternative file (i.e. pdf to print, csv, etc.) this functionality could also be added with a button click.

