# Linkedin-clone-personal-project

# Tech in my project build

1) React
2) Redux
3) Firebase Firestore Realtime db
4) Material UI
5) Email and password Authentication
6) Deploy using Firebase!
7) Front-end
8) Back-end

# Hosting URL: 
https://linkedin-clone-personalproject.web.app

# My Personal Notes

npx create-react-app linkedin-clone-personal-project --template redux

/* When i resize the image, it will keep the aspect ratio */
object-fit: contain

/* Remove the outline around border */
outline: none;

{/* If i pass in an icon, only then should i render the icon
itself as a component */}
{Icon && < Icon className="headerOption__icon" />}

/* It will stay when scroll down */
position: sticky;

/* !important overwrite material ui style */
height: 25px !important;

/* It scales nicely */
object-fit: cover;

border-bottom-left-radius: 10px;

.post__body {
    overflow-wrap: anywhere;
}

flex-direction: column;

// Make the border rounder and bolder
border-radius: 5px;

// Listener to listen to any authentication changes
auth.onAuthStateChanged()


//Use first character of the email
user.email[0]
const [posts, setPosts] = useState("");


# Steps to deploy my project using firebase

1) npm install -g firebase-tools
2) firebase init (hosting > build > y > n)
3) npm run build
4) firebase use "project id"
5) firebase deploy
