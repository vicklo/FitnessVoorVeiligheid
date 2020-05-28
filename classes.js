export class userstudent 
{
    constructor()
    {
        this.firstname =null;
        this.lastname = null;
        this.userfoto = null
        this.userid = null;
        this.username = null;
        this.studentmail = null;
        this.wachtwoord = null;
        this.klasid = null;
        this.lengte = null;
        this.gewicht = null;
        this.vetpercentage = null;
    }

}
export class userdocent
{
    constructor()
    {
        this.userid = null;
        this.username = null;
        this.wachtwoord = null;
        this.klasid = null;
    }

}
export class schema
{
    constructor()
    {
        this.schema = null;
        this.oefening = null;
        this.docent = null;
    }

}
export class klassen
{
    constructor()
    {
        this.klassenid = null;
        this.klasnaam = null;
    }
}
export class oefeingen
{
    constructor()
    {
        this.oefeningid = null;
        this.oefeningnaam = null;
        this.oefeningvideo = null;
        this.oefeningtijd = null;
        this.docent = null;
    }

}
export class logbeok
{
    constructor()
    {
        this.studentid = null;
        this.date = null;
        this.log = null;
        this.commentaar = null;
        this.oefeningid = null;
    }
}
export class messages
{
    constructor()
    {
        this.klasid = null;
        this.message = null;
    }
}