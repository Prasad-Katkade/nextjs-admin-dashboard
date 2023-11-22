# Next.js Admin Dashboard Example

I created this dummy platform with the assistance of a course provided by Next.js. The platform incorporates essential concepts such as app routing, dynamic routes, protected routes, server actions, and authentication with NextAuth.

Later, I extended the course content by integrating dynamic theming using Tailwind CSS. The dynamic theming feature serves the purpose of demonstrating how arbitrary color theme values can be utilized in a project.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website. <br/>
For details about dynamic themeing in tailwind [check below](#dynamictheme) 


## Demo 
[Admin Dashboard Vercel App](https://nextjs-admin-dashboard-pi.vercel.app/) (Email - `user@nextmail.com`, Pass - `123456`) <br/> 

![ezgif com-video-to-gif](https://github.com/Prasad-Katkade/nextjs-admin-dashboard/assets/41871409/117a55ff-5f4d-485d-a54b-b7c3d7c93c34)

<a name="dynamictheme"></a>
## Dynamic Theming

Dynamic Theming is employed to manage distinct aesthetics for various users, user groups, or business groups. There are two approaches to achieve this:

1. **Static Theming**
   - Themes and colors are directly specified in the code.
   - Changes are made based on some predefined logic.

2. **Dynamic Theming**
   - Themes and colors are specified on the server side.
   - Your application receives these values through APIs.

You can refer to the following logic to implement dynamic themeing in your app 

Here, I have created a CSS variable with some default value, and I am using that variable in my style (tailwind.config) to define my primary color. Later I am using the document object from javascript to  update the value of CSS variable to change my primary color thorughout the app  
## Implementing Dynamic Theming in Your App

To incorporate dynamic theming into your application, you can follow the logic below:

![Untitled-2023-11-22-12366](https://github.com/Prasad-Katkade/nextjs-admin-dashboard/assets/41871409/ca2ad235-a61e-4f95-b2c6-00ddc63af01d)

1. **CSS Variable Setup:**
   - Create a CSS variable with a default value. For example, in your CSS or styles (e.g., tailwind.config), define a variable for your primary color:

     ```css
     :root {
       --primary-color: #3490dc; /* Default primary color */
     }
     ```

2. **Usage in Styles:**
   - Utilize the CSS variable in your styles to set the primary color. For instance, in your styles or components:

     ```css
     .primary-button {
       background-color: var(--primary-color);
       /* Other styles */
     }
     ```

3. **Dynamic Update via JavaScript:**
   - Use JavaScript to dynamically update the CSS variable value. Here's an example using the document object:

     ```javascript
     // JavaScript code to dynamically update the primary color
     document.documentElement.style.setProperty('--primary-color', '#ff6347');
     ```

   - In this example, the primary color is changed to `#ff6347`. You can adapt this logic based on your dynamic theming requirements.

By following this approach, you can easily manage and update the primary color throughout your app dynamically. Adjust the JavaScript code to fetch values from your server or any other dynamic source as needed.
<br/> <br/>
You can refer the code for the same in my repository. Please check <br/>
1] `global.css` - To setup CSS variables <br/>
2] `tailwind.config.ts` - To utilize CSS variable and to define primary color <br/>
3] `nav-links.tsx component` - To see how I have updated the variables using themes array <br/>

## How to run project? 

1] Install dependecies using `npm install` <br/>
2] Setup and initilize database and include the credentials in `.env file`. Check [How to initilize and Seed Database](https://nextjs.org/learn/dashboard-app/setting-up-your-database) <br/>
3] Run `npm run dev` to start project and use given credentials at the top to login

## Support 
If you liked the approch be sure to ⭐ the repository. Looking forward to connect for any remote work opportunity !
