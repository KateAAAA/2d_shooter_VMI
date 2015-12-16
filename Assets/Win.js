var alphaFadeValue: float = 0.0;
var fadedone : boolean = false;
var fadestart : boolean = false;
var aTexture : Texture;

function OnGUI(){
if(fadestart==true)
{
	alphaFadeValue += Time.deltaTime / 5.0;
	GUI.color = new Color(0, 0, 0, alphaFadeValue);
	GUI.DrawTexture( new Rect(0, 0, Screen.width, Screen.height ), aTexture );
	if (alphaFadeValue >= 1)
	{
		Application.LoadLevel(0);
	}
}
}