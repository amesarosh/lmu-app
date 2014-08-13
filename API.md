API
---
Currently the app hits the following endpoints, and expects these responses

---
**Get all shows:**
`GET /api/shows?parameters`
---
**Parameters**

|Name|Example|Description|
|---|---|---|
|ll|33.4,111.9|Latitude and longitude (optional if `city` is provided)|
|city|Tempe, AZ|City, State (optional if `ll` is provided)

**Response**
```json
[
  {
    id: '1',
    date: '2014-08-30 20:30',
    venue: 'rogue_bar',
    venueName: 'Rogue Bar',
    bands: ["Japhy's Descent", "Another Band"],
    description: "This is a pretty cool show"
  },
  {
    id: '2',
    date: '2014-09-30 20:30',
    venue: 'long_wongs',
    venueName: 'Long Wongs',
    bands: ["Japhy's Descent", "Another Band"],
    description: "This is another pretty cool show"
  },
]
```
---
**Get all shows by venue**
`GET /api/shows/venues/:venue`
---
**Parameters**

|Name|Type|Description|
|---|---|---|
|venue|string|Unique ID of the venue|

**Response**
```json
[
  {
    id: '1',
    date: '2014-08-30 20:30',
    venue: 'rogue_bar',
    venueName: 'Rogue Bar',
    bands: ["Japhy's Descent", "Another Band"],
    description: "This is a pretty cool show"
  },
  {
    id: '2',
    date: '2014-09-30 20:30',
    venue: 'rogue_bar',
    venueName: 'Rogue Bar',
    bands: ["Japhy's Descent", "Another Band"],
    description: "This is another pretty cool show"
  },
]
```
---

**Get all shows by band**
`GET /api/shows/band/:band`
---
**Parameters**

|Name|Type|Description|
|---|---|---|
|band|string|Unique ID of the band|

**Response**
```json
[
  {
    id: '1',
    date: '2014-08-30 20:30',
    venue: 'rogue_bar',
    venueName: 'Rogue Bar',
    bands: ["Japhy's Descent", "Another Band"],
    description: "This is a pretty cool show"
  },
  {
    id: '2',
    date: '2014-09-30 20:30',
    venue: 'rogue_bar',
    venueName: 'Rogue Bar',
    bands: ["Japhy's Descent", "Another Band"],
    description: "This is another pretty cool show"
  },
]
```
---

**Get venue information**
`GET /api/venues/:venue`
---
**Parameters**

|Name|Type|Description|
|---|---|---|
|venue|string|Unique ID of the venue|

**Response**
```json
{
  name: 'Long Wongs',
  address: '1639 E Apache Blvd, Tempe, AZ 85281'
}
```
---