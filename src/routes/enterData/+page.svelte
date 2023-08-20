<script>
	import { Dropzone } from 'flowbite-svelte';
  import { Input, Label, Helper, Button, Checkbox, A } from 'flowbite-svelte';

	import { Fileupload } from 'flowbite-svelte';
</script>

<Label class= "mb-2">Full Robot Picture</Label>
  <Label class="py-2" for="default_size">Default size</Label>
  <Fileupload id="larg_size" size="lg" />
<form class="m-4">
  <div class="grid gap-6 mb-6 md:grid-cols-2">
    <div>
      <Label for="first_name" class="mb-2">Robot Name</Label>
      <Input type="text" id="first_name" placeholder="John" required />
    </div>
    <div>
      <Label for="last_name" class="mb-2">Drivetrain Type</Label>
      <Input type="text" id="last_name" placeholder="Doe" required />
    </div>
    <div>
      <Label for="company" class="mb-2">Drivetrain Motors</Label>
      <Input type="text" id="company" placeholder="Flowbite" required />
    </div>
    <div>
      <Label for="visitors" class="mb-2">Total Number Of Motors</Label>
      <Input type="number" id="visitors" placeholder="" required />
    </div>
	<div>
		<Label for="visitors" class="mb-2">Length of Robot</Label>
		<Input type="number" id="visitors" placeholder="" required />
	</div>
	<div>
		<Label for="visitors" class="mb-2">Width of Robot</Label>
		<Input type="number" id="visitors" placeholder="" required />
	</div>
	<div>
		<Label for="visitors" class="mb-2">Cad for Robot</Label>
		<Input type="number" id="visitors" placeholder="" required />
	</div>
	<div>
		<Label for="visitors" class="mb-2">Code for Robot</Label>
		<Input type="number" id="visitors" placeholder="" required />
	</div>
	<div>
		<Label for="visitors" class="mb-2">Types of subsystems used</Label>
		<Input type="number" id="visitors" placeholder="" required />
	</div>
	<div>
		<Label for="visitors" class="mb-2">Link to Write Up</Label>
		<Input type="number" id="visitors" placeholder="" required />
	</div>
	<div>
		<Label for="visitors" class="mb-2">Strategy Write Up</Label>
		<Input type="number" id="visitors" placeholder="" required />
	</div>
	<div>
		<Label for="visitors" class="mb-2">Link to chief delphi post</Label>
		<Input type="number" id="visitors" placeholder="" required />
	</div>
</div>
	<Button>Preview</Button>
  	<Checkbox class="mb-6 space-x-1" required>
    I acknowledge that I am sharing this information with the FRC community.
  	</Checkbox>
  	<Button type="submit">Submit</Button>
</form> 