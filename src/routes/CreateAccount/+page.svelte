<script>
	import { Card, Button, Label, Input, Checkbox } from 'flowbite-svelte';
  </script>
<h1>Unfortunately, creating an account is kind of a pain,
    because there are so many people per team, we limit the accounts per team to just 1, 
    that way there is no confusion where media is coming from 
    this can also help us prevent maliscious behavior and ban accounts more easily, 
    though we hope to never have to do that.
    for that reason, you must send us an email

    We also prefer that accounts are made by mentors so that account access can be prolonged
</h1>
<Card class="w-full max-w-md m-auto">
	<form class="flex flex-col space-y-6" action="/">
	  <h3 class="text-xl font-medium text-gray-900 dark:text-white">Create An Account</h3>
	  <Label class="space-y-2">
		<span>Email</span>
		<Input type="email" name="email" placeholder="Team93@gmail.com" required />
	  </Label>
      <Label class="space-y-2">
		<span>Team Number</span>
		<Input type="number" name="TeamNumber" placeholder="93" required />
	  </Label>
	  <Label class="space-y-2">
		<span>Your password</span>
		<Input type="password" name="password" placeholder="•••••" required />
	  </Label>
	  <div class="flex items-start">
		<a href="/" class="ml-auto text-sm text-primary-700 hover:underline dark:text-primary-500"> Lost password? </a>
	  </div>
	  <Button type="submit" class="w-full">Login to your account</Button>
	</form>
  </Card>