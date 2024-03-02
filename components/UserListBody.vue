<template>
  <div>
    <Notification>
      <template #title>New notification</template>
      <template #description
        >Today’s Andrea’s first day! Remember to welcome<br />
        Andrea @ 9am in Betulla</template
      >
    </Notification>

    <div class="grid grid-cols-2 gap-13 mt-[33px]">
      <div>
        <div>
          New Employee
          <div class="mt-[6px]">
            <FormKit
              type="form"
              #default="{ value }"
              @submit="submit"
              submit-label="Create Record"
              label="Create Record"
            >
              <FormKit type="email" name="email" placeholder="Email" />
            </FormKit>
          </div>

          <IconsDatePicker class="mt-[30px]" />
        </div>
      </div>
      <div>
        <CardItem>
          <template #name>Giovanni Lombi</template>
          <template #description>Atoms - Consulting - Team</template>
        </CardItem>
        <CardItem class="bg-neutral-light">
          <template #name>Luca Poidomani</template>
          <template #description>Atoms - Consulting - Il Sommo</template>
        </CardItem>
        <CardItem>
          <template #name>Giorgia Carini</template>
          <template #description>Atoms - Consulting - La Principessa</template>
        </CardItem>
        <CardItem class="bg-neutral-light">
          <template #name>Massimo Pegoraro</template>
          <template #description>Atoms - Tech - Il Maestro</template>
        </CardItem>
        <CardItem>
          <template #name>Salvatore Lo Monaco</template>
          <template #description>Atoms - Tech - Porseo</template>
        </CardItem>
        <CardItem class="bg-neutral-light">
          <template #name>Carlo La Pera</template>
          <template #description>Atoms - Tech - Ho dormito un'ora</template>
        </CardItem>
      </div>
    </div>
  </div>
</template>

<style type="text/scss">
.formkit-form {
  display: flex;
}
.formkit-inner {
  margin-right: 8px;
}
.formkit-input[type="email"] {
  border: 1px solid #cbd5e1;
}
</style>
