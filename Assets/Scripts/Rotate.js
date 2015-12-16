var yrotateSpeed : float = 1.0;
var xrotateSpeed : float = 0.0;
var zrotateSpeed : float = 0.0;


function Update () {
transform.eulerAngles.y += yrotateSpeed;
transform.eulerAngles.x += xrotateSpeed;
transform.eulerAngles.z += zrotateSpeed;
}