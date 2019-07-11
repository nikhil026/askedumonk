const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const compression = require('compression');
const methodOverride = require("method-override");
const exphbs = require("express-handlebars");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();
// load User model
require("./models/User");
require("./models/Story");

// load passport configuration
require("./config/passport")(passport);
// load routes
const index = require("./routes/index");
const stories = require("./routes/stories");
const auth = require("./routes/auth");

//for compression of static files
app.use(compression());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// map global promise
mongoose.Promise = global.Promise;

// Connect to MongoDB
mongoose
  .connect(db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());
// Passport Config
require("./config/passport")(passport);

// method-override middleware
app.use(methodOverride("_method"));

// serving static files
app.use(express.static(path.join(__dirname, "public")));

// express session middleware
app.use(cookieParser());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
    // cookie: { secure: true }
  })
);
app.use(passport.initialize());
app.use(passport.session());

// set global variables
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

// handlebars helper
const {
  truncate,
  stripTags,
  formatDate,
  select,
  editIcon
} = require("./helpers/hbs")

// handlebars middleware
app.engine(
  "handlebars",
  exphbs({
    helpers: {
      truncate: truncate,
      stripTags: stripTags,
      formatDate: formatDate,
      select: select,
      editIcon: editIcon
    },
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);
// use routes
app.use("/", index);
app.use("/stories", stories);
app.use("/auth", auth);

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
