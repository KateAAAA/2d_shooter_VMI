var health : float = 100;
var score : int = 0;
var laserammo : float = 50;
var megaammo : float = 0;
var rocketammo : float = 0;
var megadp : float;
var alphaFadeValue: float = 0.0;
var fadedone : boolean = false;
var fadestart : boolean = false;
var aTexture : Texture;
var player : GameObject;
var explosion : GameObject;
var gametime : float = 0;
var explode : boolean = true; 


function Start () {
player = GameObject.Find("Player");
}

function Update () {
gametime += Time.deltaTime;
if(health > 100)
	{
	health = 100;
	}
if(laserammo < 10)
	{
	laserammo += Time.deltaTime;
	}
if(megaammo>0)
	{
	megadp = megaammo/100;
	}
if(health <= 0)
{
fadestart = true;
}
}
function OnGUI () {
		GUI.Box (Rect(1020,10,100,20), score.ToString("D6"));
		GUI.Box (Rect(1020,30,100,20), gametime.ToString("F2"));
		GUI.Box (Rect(10,10,100,20), health.ToString("F0"));
		GUI.Box (Rect(10,30,100,20), laserammo.ToString("F0"));
		GUI.Box (Rect(10,50,100,20), megadp.ToString("F0"));
		GUI.Box (Rect(10,70,100,20), rocketammo.ToString("F0"));
	if(fadestart==true)
	{
		Instantiate(explosion, player.transform.position, Quaternion.identity);
		alphaFadeValue += Time.deltaTime / 15.0;
		GUI.color = new Color(255, 0, 0, alphaFadeValue);
		GUI.DrawTexture( new Rect(0, 0, Screen.width, Screen.height ), aTexture );
		if (alphaFadeValue >= 1)
		{
			Application.LoadLevel(0);
		}
	}
}