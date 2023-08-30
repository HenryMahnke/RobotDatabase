<script>
	import { Dropzone } from 'flowbite-svelte';
  import { Input, Label, Helper, Button, Checkbox, A } from 'flowbite-svelte';

	import { Fileupload } from 'flowbite-svelte';
</script>

<Label class= "mb-2">Full Robot Picture</Label>
  <Label class="py-2" for="default_size">Default size</Label>
  <Fileupload id="larg_size" size="lg" />
<form class="m-4" method="POST">
  <div class="grid gap-6 mb-6 md:grid-cols-2">
    <div>
      <Label for="first_name" class="mb-2">Robot Name </Label>
      <Input name="Robot Name" type="text" id="first_name" placeholder="Tobor XV" required />
    </div>
	<div>
		<Label for="last_name" class="mb-2">Team Number</Label>
		<Input name="Team Number" type="number" id="last_name" placeholder="1234" required />
	</div>
	<div>
		  <Label for="visitors" class="mb-2">Year</Label>
		  <Input name="Year" type="number" id="visitors" placeholder="2023" required />
	  </div>
    <div>
      <Label for="visitors" class="mb-2">Drivetrain Type</Label>
      <Input name="Drivetrain Type" type="text" id="visitors" placeholder="Swerve" required />
    </div>
    <div>
      <Label for="company" class="mb-2">Drivetrain Motors</Label>
      <Input name="Drivetrain Motors" type="text" id="company" placeholder="Falcon 500" required />
    </div>
    <div>
      <Label for="visitors" class="mb-2">Total Number Of Motors</Label>
      <Input name="Motor Count" type="number" id="visitors" placeholder="12" required />
    </div>
	<div>
		<Label for="visitors" class="mb-2">Length of Robot</Label>
		<Input name="Robot Length" type="number" id="visitors" placeholder="32" required />
	</div>
	<div>
		<Label for="visitors" class="mb-2">Width of Robot</Label>
		<Input name="Robot Width" type="number" id="visitors" placeholder="32" required />
	</div>
	<div>
		<Label for="visitors" class="mb-2">Cad for Robot</Label>
		<Input name="Cad Link" type="url" id="visitors" placeholder="https://example.com" required />
	</div>
	<div>
		<Label for="visitors" class="mb-2">Code for Robot</Label>
		<Input name="Code Link" type="url" id="visitors" placeholder="https://example.com" required />
	</div>
	<div>
		<Label for="visitors" class="mb-2">Types of subsystems used</Label>
		<Input name="Subsystems" type="text" id="visitors" placeholder="Our robot used a indexer for ball storage that was loaded by a over the bumper intake" required />
	</div>
	<div>
		<Label for="visitors" class="mb-2">Link to Write Up</Label>
		<Input name="Write Up" type="url" id="visitors" placeholder="https://example.com" required />
	</div>
	<div>
		<Label for="visitors" class="mb-2">Strategy Write Up</Label>
		<Input name="Strategy Write Up" type="url" id="visitors" placeholder="https://example.com" required />
	</div>
	<div>
		<Label for="visitors" class="mb-2">Link to chief delphi post</Label>
		<Input name="CD Post" type="url" id="visitors" placeholder="https://chiefdelphi.com" required />
	</div>
	
</div>
	<Button>Preview</Button>
  	<Checkbox class="mb-6 space-x-1" required>
    I acknowledge that I am sharing this information with the FRC community.
  	</Checkbox>
  	<Button type="submit">Submit</Button>
</form> 