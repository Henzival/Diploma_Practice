import { Town } from "../interfaces/town.interface"

export function mapTowns(towns: Town[]) {
    return towns.map(town => town.name);
}