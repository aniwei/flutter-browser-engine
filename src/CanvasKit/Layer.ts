
export abstract class Layer {
  public parent: ContainerLayer | null = null
}

export abstract class ContainerLayer extends Layer {
  
}