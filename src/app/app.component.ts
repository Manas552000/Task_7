/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTask2';
  priceCardList=[
    {
      id:"1",
      price :"0",
      name:"free",
      features:[
        {
          title:"Single User"
        },
        {
          title:"5GB Storage"
        },
        {
          title:"Unlimited Public Projects"
        },
        {
          title:"Community Access"
        },
        {
          title:"Unlimited Private Projects"
        },
        {
          title:"Dedicated Phone Support"
        },
        {
          title:"Free Subdomain"
        },
        {
          title:"Monthly Status Reports"
        }
      ]
    },
    {
      id:"2",
      price:"9",
      name:"Plus",
      features:[
        {
          title:"5 User"
        },
        {
          title:"50GB Storage"
        },
        {
          title:"Unlimited Public Projects"
        },
        {
          title:"Community Access"
        },
        {
          title:"Unlimited Private Projects"
        },
        {
          title:"Dedicated Phone Support"
        },
        {
          title:"Free Subdomain"
        },
        {
          title:"Monthly Status Reports"
        }
      ]
    },
    {
      id:"3",
      price:"49",
      name:"Enterprize",
      features:[
        {
          title:"Unlimited Users"
        },
        {
          title:"150GB Storage"
        },
        {
          title:"Unlimited Public Projects"
        },
        {
          title:"Community Access"
        },
        {
          title:"Unlimited Private Projects"
        },
        {
          title:"Dedicated Phone Support"
        },
        {
          title:"Unlimited Free Subdomains"
        },
        {
          title:"Monthly Status Reports"
        }
      ]
    },
    
  ]
}*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myThirdAngular';
  priceCardList=[
    {
      id:"1",
      price :"0",
      name:"free",
      features:[
        {
          title:"Single User"
        },
        {
          title:"5GB Storage"
        },
        {
          title:"Unlimited Public Projects"
        },
        {
          title:"Community Access"
        }
        
      ],
      features_muted:[
        
        {
          title:"Unlimited Private Projects"
        },
        {
          title:"Dedicated Phone Support"
        },
        {
          title:"Free Subdomain"
        },
        {
          title:"Monthly Status Reports"
        }
      ]
    },
    
    {
      id:"2",
      price:"9",
      name:"Plus",
      features:[
        {
          title:"5 User"
        },
        {
          title:"50GB Storage"
        },
        {
          title:"Unlimited Public Projects"
        },
        {
          title:"Community Access"
        },
        {
          title:"Unlimited Private Projects"
        },
        {
          title:"Dedicated Phone Support"
        },
        {
          title:"Free Subdomain"
        }
      ],
      features_muted:[
        
        {
          title:"Monthly Status Reports"
        }
      ]
    },
    {
      id:"3",
      price:"49",
      name:"pro",
      features:[
        {
          title:"Unlimited Users"
        },
        {
          title:"150GB Storage"
        },
        {
          title:"Unlimited Public Projects"
        },
        {
          title:"Community Access"
        },
        {
          title:"Unlimited Private Projects"
        },
        {
          title:"Dedicated Phone Support"
        },
        {
          title:"Unlimited Free Subdomains"
        },
        {
          title:"Monthly Status Reports"
        }
       ]
      
    },
    
  ]
}

