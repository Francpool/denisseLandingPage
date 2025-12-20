import React from "react";
import "../styles/testLeche.css";

export default function TestLeche() {
    return (
        <section className="test-leche">
            <div className="test-leche__container">
                {/* Header Section */}
                <div className="test-leche__header">
                    <div className="test-leche__blob"></div>
                    <h1 className="test-leche__title libre-baskerville-bold">
                        Test de alergia a la proteína de la leche de vaca.
                    </h1>
                </div>

                {/* Instructions */}
                <div className="test-leche__instructions">
                    <h2 className="test-leche__subtitle">Instrucciones</h2>
                    <p>
                        Si se sospecha la presencia de síntomas relacionados con la ingesta
                        de leche de vaca, evalúe los síntomas observados/comunicados
                        seleccionando la puntuación más apropiada para cada síntoma. Una vez
                        completada, sume las puntuaciones y anote el total en el recuadro
                        que figura en la parte inferior del formulario de puntuación.
                    </p>
                </div>

                {/* Table */}
                <div className="test-leche__table-container">
                    <div className="test-leche__table-header">
                        <div className="col-sintomas">SÍNTOMAS</div>
                        <div className="col-puntuacion-desc">PUNTUACIÓN</div>
                        <div className="col-puntuacion-input">PUNTUACIÓN</div>
                    </div>

                    {/* Row 1: Llanto */}
                    <div className="test-leche__row">
                        <div className="col-sintomas">
                            <strong>Llanto*</strong>
                        </div>
                        <div className="col-puntuacion-desc">
                            <div className="score-desc">
                                <span>0: ≤ 1 hora/día</span>
                                <span>1: De 1 a 1.5 horas/día</span>
                                <span>2: De 1.5 a 2 horas/día</span>
                                <span>3: De 2 a 3 horas/día</span>
                                <span>4: De 3 a 4 horas/día</span>
                                <span>5: De 4 a 5 horas/día</span>
                                <span>6: &gt; 5 horas/día</span>
                            </div>
                        </div>
                        <div className="col-puntuacion-input">
                            <input type="text" className="test-leche__input" />
                        </div>
                    </div>

                    {/* Row 2: Regurgitaciones */}
                    <div className="test-leche__row">
                        <div className="col-sintomas">
                            <strong>Regurgitaciones</strong>
                        </div>
                        <div className="col-puntuacion-desc">
                            <div className="score-desc">
                                <span>0: De 0 a 2 episodios/día</span>
                                <span>1: De 3 a 5 episodios de pequeño volumen</span>
                                <span>2: Regurgitaciones de &gt; ½ cucharilla de café</span>
                                <span>
                                    3: Regurgitaciones de ½ a 1 cucharilla de café en varias de
                                    las tomas
                                </span>
                                <span>
                                    4: Regurgitaciones continuas de volúmenes pequeños &gt; 30
                                    minutos después de varias tomas
                                </span>
                                <span>
                                    5: Regurgitaciones de la toma completa después de cada toma
                                </span>
                            </div>
                        </div>
                        <div className="col-puntuacion-input">
                            <input type="text" className="test-leche__input" />
                        </div>
                    </div>

                    {/* Row 3: Heces */}
                    <div className="test-leche__row">
                        <div className="col-sintomas">
                            <strong>Heces (escala de Bristol)</strong>
                        </div>
                        <div className="col-puntuacion-desc">
                            <div className="score-desc">
                                <span>4: Tipos 1 y 2 (heces duras)</span>
                                <span>0: Tipos 3 y 4 (heces normales)</span>
                                <span>2: Tipos 5 (heces blandas)</span>
                                <span>
                                    4: Tipos 6 (heces blandas y aguadas si no se asocian a
                                    infección)
                                </span>
                                <span>
                                    6: Tipos 7 (heces completamente acuosas si no se asocian a
                                    infección)
                                </span>
                            </div>
                        </div>
                        <div className="col-puntuacion-input">
                            <input type="text" className="test-leche__input" />
                        </div>
                    </div>

                    {/* Row 4: Cutáneos */}
                    <div className="test-leche__row">
                        <div className="col-sintomas">
                            <strong>Síntomas cutáneos</strong>
                        </div>
                        <div className="col-puntuacion-desc">
                            <div className="score-grid">
                                <div>
                                    <strong>0 a 6 Eccema atópico</strong>
                                    <div className="flex-row">
                                        <span>Ausente:</span> <span>0</span>
                                    </div>
                                    <div className="flex-row">
                                        <span>Leve:</span> <span>1</span>
                                    </div>
                                    <div className="flex-row">
                                        <span>Moderado:</span> <span>2</span>
                                    </div>
                                    <div className="flex-row">
                                        <span>Grave:</span> <span>3</span>
                                    </div>
                                </div>
                                <div style={{ marginLeft: '1rem' }}>
                                    <strong>CABEZA-CUELLO-TRONCO</strong>
                                    <div>0</div>
                                    <div>1</div>
                                    <div>2</div>
                                    <div>3</div>
                                </div>
                                <div style={{ marginLeft: '1rem' }}>
                                    <strong>BRAZOS-MANOS-PIERNAS-PIES</strong>
                                    <div>0</div>
                                    <div>1</div>
                                    <div>2</div>
                                    <div>3</div>
                                </div>
                            </div>
                            <div className="score-grid" style={{ marginTop: '1rem', borderTop: '1px dashed #ccc', paddingTop: '0.5rem' }}>
                                <div className="flex-row full-width">
                                    <span><strong>0 a 6 Urticaria</strong></span>
                                    <span>No:0</span>
                                    <span>Si: 6</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-puntuacion-input">
                            <input type="text" className="test-leche__input" />
                            <input type="text" className="test-leche__input" style={{ marginTop: '1rem' }} />
                        </div>
                    </div>

                    {/* Row 5: Respiratorios */}
                    <div className="test-leche__row">
                        <div className="col-sintomas">
                            <strong>Síntomas respiratorios</strong>
                        </div>
                        <div className="col-puntuacion-desc">
                            <div className="score-desc">
                                <span>0: Ningún síntoma respiratorio</span>
                                <span>1: Síntomas leves</span>
                                <span>2: Síntomas moderados</span>
                                <span>3: Síntomas graves</span>
                            </div>
                        </div>
                        <div className="col-puntuacion-input">
                            <input type="text" className="test-leche__input" />
                        </div>
                    </div>
                </div>

                <div className="test-leche__footer">
                    <p>
                        * El llanto solo debe considerarse si el niño llora de manera
                        inusual o más, según los padres, sin ninguna otra causa obvia.
                    </p>
                </div>

                {/* Interpretation Section */}
                <div className="test-leche__interpretation">
                    <h2 className="test-leche__subtitle-interp">Interpretación del resultado</h2>
                    <p className="test-leche__interp-text">La puntuación va de 0 a 33.</p>
                    <p className="test-leche__interp-text">Cada síntoma tiene una puntuación máxima de 6, salvo los síntomas respiratorios, en los que la puntuación máxima es de 3.</p>
                    <p className="test-leche__interp-text">Si la puntuación final es ≥ 12, es probable que los síntomas referidos estén relacionados con la ingesta de leche de vaca. Podría tratarse de un caso de APLV.</p>
                    <p className="test-leche__interp-text">En niños mayores de 12 meses, pueden existir síntomas relacionados con la ingesta de leche de vaca, pero deben considerarse otras causas.</p>
                    <p className="test-leche__interp-text"><strong>El diagnóstico de APLV solo puede confirmarse mediante una dieta de eliminación seguida de una prueba de provocación oral.</strong></p>
                </div>
            </div>
        </section>
    );
}
