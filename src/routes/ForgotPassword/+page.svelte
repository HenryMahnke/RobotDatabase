<script>
	import { Card, Button, Label, Input, Checkbox } from 'flowbite-svelte';
    import { Blockquote, P } from 'flowbite-svelte';
  </script>
  
  <Blockquote border bg class="p-4 my-4">
    <P size="xl" height="relaxed">Because we can only have a single account per team in order to prevent malicious behavior, if the email is the same the recovery process will be much simpler, otherwise, you will have to reauthenticate your account.
    </P>
  </Blockquote>

<Card class="w-full max-w-md m-auto">
	<form class="flex flex-col space-y-6" action="/">
	  <h3 class="text-xl font-medium text-gray-900 dark:text-white">Recover an Account</h3>
	  <Label class="space-y-2">
		<span>Email</span>
		<Input type="email" name="email" placeholder="Team93@gmail.com" required />
	  </Label>
	  <Button type="submit" class="w-full">Login to your account</Button>
	</form>
  </Card>