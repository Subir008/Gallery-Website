## WEB-GALLERY || A GALLLERY WEBSITE

It is a dynamic gallery website where users can search for any images and receive results accordingly.

[Click Here For Demo](https://gallerygaze.netlify.app/)

[Click Here For Demo](https://subir008.github.io/Web-Gallery/)

### TECHNOLOGY USED
 * HTML
 * CSS
 * JavaScript

## API Reference

 * Unsplash API

#### Get a photo

Retrieve a single photo.

```http
  GET /photos/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `string` | **Required** The photo’s ID .|

#### List photos

```http
  GET /photos
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `page`    | `string` |  Page number to retrieve. (Optional; default: 1) |
|`per_page` | `string` |  Number of items per page. (Optional; default: 10) |
|`order_by`| `string`	| How to sort the photos. Optional. (Valid values: latest, oldest, popular; default: latest)|

#### Search photos
Get a single page of photo results for a query.

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|`query	`   | `string` | Search terms.					   |
| `page`    | `string` |  Page number to retrieve. (Optional; default: 1) |
|`per_page` | `string` |  Number of items per page. (Optional; default: 10) |
|`order_by`| `string`	| How to sort the photos. Optional. (Valid values: latest, oldest, popular; default: latest)|


 ### COLOR PALATTE

 * https://coolors.co/palette/fb6107-f3de2c-7cb518-5c8001-fbb02d

 ### FONT 

 * https://fonts.google.com/specimen/Playwrite+HR+Lijeva
