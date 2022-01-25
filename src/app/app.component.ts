import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
currentPage=1;
 images=[
   {title:'at the beach',url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',content:"aaaaaaaaaaaaaaaaaaaaa"},
   {title:'girl',url:'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',content:"bbbbbbbbbbbbbbbbbbbbbb"},
   {title:'friend',url:'https://media.istockphoto.com/photos/orangutan-picture-id1293750129?b=1&k=20&m=1293750129&s=170667a&w=0&h=Q1oqdBvKys_zug09v0W4MWJue-88tW8R4O20j64M3hw=',content:'cccccccccc'},
   {title:'friend',url:'https://media.istockphoto.com/photos/orangutan-picture-id1293750129?b=1&k=20&m=1293750129&s=170667a&w=0&h=Q1oqdBvKys_zug09v0W4MWJue-88tW8R4O20j64M3hw=',content:'dddddddddddd'},
   {title:'at the beach',url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',content:"aaaaaaaaaaaaaaaaaaaaa"},
   {title:'girl',url:'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',content:"bbbbbbbbbbbbbbbbbbbbbb"},
   {title:'friend',url:'https://media.istockphoto.com/photos/orangutan-picture-id1293750129?b=1&k=20&m=1293750129&s=170667a&w=0&h=Q1oqdBvKys_zug09v0W4MWJue-88tW8R4O20j64M3hw=',content:'cccccccccc'},
   {title:'friend',url:'https://media.istockphoto.com/photos/orangutan-picture-id1293750129?b=1&k=20&m=1293750129&s=170667a&w=0&h=Q1oqdBvKys_zug09v0W4MWJue-88tW8R4O20j64M3hw=',content:'dddddddddddd'},
   {title:'at the beach',url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',content:"aaaaaaaaaaaaaaaaaaaaa"},
   {title:'girl',url:'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',content:"bbbbbbbbbbbbbbbbbbbbbb"},
   {title:'friend',url:'https://media.istockphoto.com/photos/orangutan-picture-id1293750129?b=1&k=20&m=1293750129&s=170667a&w=0&h=Q1oqdBvKys_zug09v0W4MWJue-88tW8R4O20j64M3hw=',content:'cccccccccc'},
   {title:'friend',url:'https://media.istockphoto.com/photos/orangutan-picture-id1293750129?b=1&k=20&m=1293750129&s=170667a&w=0&h=Q1oqdBvKys_zug09v0W4MWJue-88tW8R4O20j64M3hw=',content:'dddddddddddd'},
   {title:'at the beach',url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',content:"aaaaaaaaaaaaaaaaaaaaa"},
   {title:'girl',url:'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',content:"bbbbbbbbbbbbbbbbbbbbbb"},
   {title:'friend',url:'https://media.istockphoto.com/photos/orangutan-picture-id1293750129?b=1&k=20&m=1293750129&s=170667a&w=0&h=Q1oqdBvKys_zug09v0W4MWJue-88tW8R4O20j64M3hw=',content:'cccccccccc'},
   {title:'friend',url:'https://media.istockphoto.com/photos/orangutan-picture-id1293750129?b=1&k=20&m=1293750129&s=170667a&w=0&h=Q1oqdBvKys_zug09v0W4MWJue-88tW8R4O20j64M3hw=',content:'dddddddddddd'}

 ];

 
}
