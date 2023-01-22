import { Option } from "../AutoComplete"
import { faker } from "@faker-js/faker"
import { uuid } from "../../../../common/uuid/uuid"
import { fakeObjects } from "../../../../common/testUtils/fakeObjects"

export const fakeOption = (overwrites?: Partial<Option>): Option => {
  return {
    label: faker.name.firstName(),
    subLabel: faker.name.jobDescriptor(),
    id: uuid(),
    ...overwrites,
  }
}

export const fakeOptions = (amount: number, overwrites?: Partial<Option>[]) =>
  fakeObjects(amount, fakeOption, overwrites)
