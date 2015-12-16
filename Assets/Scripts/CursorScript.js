var speed: float = 2;
var maxSpeed: float = 20;
private var dest: Vector3;

function Start(){
	dest = transform.position;
}

function Update(){
	var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	var hit: RaycastHit;
	if (Physics.Raycast(ray, hit)){ // if mouse pointer hit 
		dest = hit.point; // some update destination 
	}
	transform.position = dest;
	transform.position.y = 0;
	/*
	var mov = dest - transform.position; // find direction to move
	mov.y = 0.5; // zero y to do not interfere with gravity
	mov = mov * speed; // apply speed
	/*if (mov.magnitude > maxSpeed){ // clamp speed to maxSpeed
		mov = mov.normalized * maxSpeed;
	}*/
	// move in horizontal direction
	//transform.Translate(mov , Space.World);
}