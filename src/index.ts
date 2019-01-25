
import express from "express";
const app = express();
const port = 6007;

app.get( "/", ( req, res ) => {
  howdy(res);
} );

const howdy = (res: any) => {
  // tslint:disable-next-line:no-console
  console.log( `howdy` );
  res.send("Howdy world!");
};

app.listen( port, () => {
  // tslint:disable-next-line:no-console
  console.log( `server started at http://localhost:${ port }` );
});
