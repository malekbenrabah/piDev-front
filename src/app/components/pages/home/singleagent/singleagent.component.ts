import { Component, OnInit } from '@angular/core';
import agent from '../../../../data/agents.json'

@Component({
  selector: 'app-singleagent',
  templateUrl: './singleagent.component.html',
  styleUrls: ['./singleagent.component.css']
})
export class SingleagentComponent implements OnInit {

  constructor() { }
  public agent = agent;

  ngOnInit(): void {
  }

}
