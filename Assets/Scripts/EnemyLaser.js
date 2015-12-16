var player : GameObject;
var playerpos : Vector3;

function Start () {
player = GameObject.Find("Player");
playerpos = player.transform.position;
this.transform.LookAt(player.transform.position);
}

function Update () {
this.transform.position += Vector3.Scale(transform.forward, Vector3(.1,.1,.1));
this.transform.position.y = 1;
}